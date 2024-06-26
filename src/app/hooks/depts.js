import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useDepts = () => {
  const { departments, loading, error } = useSelector((state) => state.depts);
  console.log(departments, loading, error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [dispatch, error]);

  return [departments, loading, error];
};
