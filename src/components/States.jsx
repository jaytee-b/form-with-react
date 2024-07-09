import { useState } from "react"




const States = () => {
    const [nameState, setNameState] = useState("Bambo");
    const [companyState, setCompanyState] = useState("a cocoa farm");
    const [familyState, setFamilyState] = useState("1 wife and 2 kids");
    const coronation = () => {
        setNameState("Prince Bambo, the First")
        setCompanyState("a city")
        setFamilyState("4 wives and 25 kids")
    }

    return (
        <>
            <div>
                <h1>
                    I am {nameState}, I run {companyState}, I have {familyState}.
                    <br />
                    <button onClick={coronation} className="bg-black text-white p-1">Coronation</button>
                </h1>
            </div>
        </>
    )
}

export default States
