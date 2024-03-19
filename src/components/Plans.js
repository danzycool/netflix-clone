import React, { useEffect, useState } from 'react';

import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { loadStripe } from '@stripe/stripe-js';

const Plans = () => {
    const [products, setProducts] = useState([]);
    const [subscription, setSubscription] = useState(null);

    const user = useSelector(selectUser);

    const data = {
        basic: {
            name: "Basic Plan",
            price: 5.99,
            description: "720p"
        },
        standard: {
            name: "Standard Plan",
            price: 8.99,
            description: "1080p"
        },
        premium: {
            name: "Premium Plan",
            price: 13.99,
            description: "4K + HDR"
        }
    }

    const loadCheckout = async (priceId) => {
        const docRef = await db
            .collection('customers')
            .doc(user.uid)
            .collection("checkout_sessions")
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin
            });

        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();

            if (error) {
                alert(`An error occured: ${error.message}`)
            } else if (sessionId) {
                const stripe = await loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
                stripe.redirectToCheckout({ sessionId })
            }
        })
    }

    useEffect(() => {
        db.collection('customers')
            .doc(user.uid)
            .collection('subscriptions')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(async subscription => {
                    setSubscription({
                        role: subscription.data().role,
                        current_period_end: subscription.data().current_period_end.seconds,
                        current_period_start: subscription.data().current_period_start.seconds,
                    })
                })
            })
    }, [user.uid])

    useEffect(() => {
        db.collection('products')
            .where('active', '===', true)
            .get().then(querySnapshot => {
                const products = {};
                querySnapshot.forEach(async productDoc => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.collection('prices').get();
                    priceSnap.docs.forEach(price => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data()
                        }
                    })
                });
                setProducts(products);
            });
    }, []);



    return (
        <div className=''>
            <br />
            {subscription && <p className=''>
                Renewal Date {
                    new Date(subscription?.current_period_end * 1000)
                        .toLocaleDateString()
                }
            </p>}

            {Object.entries(products).map(([productId, productData]) => {
                // Logic to check if the user's subscription is active

                const isCurrentPackage = productData?.name?.toLowerCase()
                    .includes(subscription?.role)

                return (
                    <div
                        key={productId}
                        className={`
                            flex justify-between p-5 opacity-80 hover:opacity-100
                            ${isCurrentPackage && '!bg-gray-500'}
                        `}
                    >
                        <div className=''>
                            <h5 className='text-[13px] font-bold'>
                                {productData.name}
                            </h5>
                            <h6 className='text-[10.72px] font-bold'>
                                {productData.description}
                            </h6>
                        </div>
                        <button
                            className='py-2.5 px-5 text-base bg-netflix 
                            font-semibold border-none cursor-pointer'
                            onClick={() => !isCurrentPackage && loadCheckout(productData?.prices?.priceId)}
                        >
                            {isCurrentPackage ? "Current Package" : "Subscribe"}
                        </button>
                    </div>
                )
            })}

        </div>
    )
}

export default Plans