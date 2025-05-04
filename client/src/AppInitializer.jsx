import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./features/categorySlice";

const AppInitializer = () => {
    const dispatch = useDispatch();
    const categoryStatus = useSelector((state) => state.categories.status);

    useEffect(() => {
        if (categoryStatus === 'idle') {
            dispatch(getCategories());
        }
    }, [categoryStatus, dispatch]);

    return null; // Doesn't render anything
};

export default AppInitializer;