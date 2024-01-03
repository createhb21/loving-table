import { useState } from 'react';

const useCondition = () => {
  const [isConditionFocus, setIsConditionFocus] = useState(false);
  const [isConditionError, setIsConditionError] = useState(false);

  const handleFocusCondition = () => {
    setIsConditionFocus(true);
  };

  const handleBlurCondition = () => {
    setIsConditionFocus(false);
  };

  const handleCreateConditionError = () => {
    setIsConditionError(true);
  };

  const handleDeleteConditionError = () => {
    setIsConditionError(false);
  };

  return {
    isConditionFocus,
    isConditionError,
    handleFocusCondition,
    handleBlurCondition,
    handleCreateConditionError,
    handleDeleteConditionError,
  };
};

export default useCondition;
