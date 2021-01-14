import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues) => {
    const [values, setValues] = useLocalStorage('darkModeKey', initialValues);
        return([values, setValues])
}

export default useDarkMode;