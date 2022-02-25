import { useLoading, useModal, useStep, useForm } from "../contexts";

export const useAddBooks = () => {
  const { isLoading, setIsLoading } = useLoading();
  const { setIsOpen } = useModal();
  const { setStep } = useStep();
  const { state, setState } = useForm();

  const fetchMethod = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setIsLoading(false);
        setIsOpen(true);
        response.json();
      })
      .then((json) => console.log(json));
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
