import { useLoading, useModal, useStep, useForm } from "../contexts";

export const useAddBooks = () => {
  const { isLoading, setIsLoading } = useLoading();
  const { setIsOpen } = useModal();
  const { setStep } = useStep();
  const { state, setState } = useForm();

  const fetchMethod = () => {
    setIsLoading(true);
    console.log(state);
    setTimeout(() => {
      setIsLoading(true);
      console.log("Data saved successfully");
      setIsLoading(false);
      setIsOpen(true);
    }, 2000);
  };

  const handleAddAnother = () => {
    setIsOpen(false);
    setStep(1);
    window.location.reload();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return { isLoading, fetchMethod, handleAddAnother, state, handleChange };
};
