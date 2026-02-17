import { useState } from 'react'

function SignUp1() {
    const [details, setDetails] = useState({ name: "", email: "", phone: "" });
    function handleFormChange(event) {
        event.preventDefault();
        setDetails({ ...details, [event.target.name]: event.target.value });
        console.log(details);
    }
    function submit(event) {
        event.preventDefault();
        localStorage.setItem("userData", JSON.stringify(details));
        console.log(details);
    }
    return (
        <section>
            <h1>Signup Form</h1>
            <form>
                <input type="text" name='name' placeholder='Enter your Name' value={details.name} onChange={(e) => handleFormChange(e)} />
                <input type="email" name='email' placeholder='Enter your Email' value={details.email} onChange={(e) => handleFormChange(e)} />
                <input type="number" name='phone' placeholder='Enter your mobile number' value={details.phone} onChange={(e) => handleFormChange(e)} />
                <button type="button" onClick={(e) => submit(e)}>Submit</button>
            </form>
        </section>
    )
}

export default SignUp1
