import useFormHook from '../../Hooks/UseFormHooks';
import Schemas from '../../Utils/Validation';

const useTripHistory = ({navigate, goBack}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.editProfileScheme,
  );
  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
  };
};

export default useTripHistory;
