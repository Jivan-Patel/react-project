import { useRef } from 'react'

function SignUp2() {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    function submit(e) {
        e.preventDefault();
        const currentData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
        }
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        console.log(currentData);
        localStorage.setItem("userData", JSON.stringify(currentData));
        e.target.form.reset();
    }
    return (
        <section>
            <h1>Signup Form</h1>
            <form>
                <input type="text" ref={nameRef} name='name' placeholder='Enter your Name' required />
                <input type="email" ref={emailRef} name='email' placeholder='Enter your Email' required />
                <input type="number" ref={phoneRef} name='phone' placeholder='Enter your mobile number' required />
                <button type="submit" onClick={(e) => submit(e)}>Submit</button>
            </form>
        </section>
    )
}

export default SignUp2
