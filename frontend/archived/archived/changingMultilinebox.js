
// const multiLineTextBox = useRef(null)

// function changeTextInput(event) {
//     // console.log(event.target.value);
//     event.preventDefault()
//     const newText = event.target.value
//     setFormData(prevFormData => ({ ...prevFormData, [label]: newText }))
//     const { scrollHeight } = multiLineTextBox.current;
//     multiLineTextBox.current.style.height = "auto"
//     multiLineTextBox.current.style.height = `${scrollHeight}px`;
// }

// useEffect(() => {
//     if (multiLineTextBox) {
//         const { scrollHeight } = multiLineTextBox.current;
//         multiLineTextBox.current.style.height = "auto"
//         multiLineTextBox.current.style.height = `${scrollHeight}px`;
//     }
// }, [multiLineTextBox, windowHeight, windowWidth])