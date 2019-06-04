/*
    All react hooks should begin with the word use
*/

import React, { useState, useEffect } from 'react';

export function useIsLoading(loadingCallback){
    const [isLoading, SetIsLoading] = useState(null);

    useEffect(() => {
        let didProcess = false;
        function handleLoading(status) {
            SetIsLoading(status.isLoading);
        }

        (async() => {
            await loadingCallback();
            if (!didProcess){
                handleLoading({
                    isLoading: true
                })
            }
            
        })();


        return () => {
            didProcess = true
        };
    }, []);

    return isLoading
}