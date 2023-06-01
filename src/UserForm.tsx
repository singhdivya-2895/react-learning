import { useMemo, useState, memo, useEffect } from "react";
import './index.css'

interface IUserForm {
    name: string;
    age: number
}
const defaultFormValue = {
    name: '',
    age: 0
}
const UserformBase = ({ count }: { count: number }) => {
    const [form, setForm] = useState<IUserForm>(defaultFormValue);
    const [ageClass, setAgeClass] = useState("");

    console.log("I am rendered");
    const onChangeName = (event: any) => {
        setForm({
            ...form,
            name: event.target.value,
        })
    }

    const onChangeAge = (event: any) => {
        setForm({
            ...form,
            age: event.target.value,
        });
    };

    const countOfChars_Name = useMemo(() => {
        return form.name.length
    }, [form.name]);

    useEffect(() => {
        console.log("I am being called");
        const className = form.age > 10 ? "red" : "";
        setAgeClass(className);

        return () => {
            console.log("I am being cleaned");
        };
    }, [form.age]);

    return (
        <div>
            Name: <input
                type="text"
                name="username"
                value={form.name}
                onChange={onChangeName} />
            {countOfChars_Name} character
            <br />
            Age: <input
                className={ageClass}
                type="text"
                name="userage"
                value={form.age}
                onChange={onChangeAge}
            />
        </div>
    );
}
export const Userform = memo(UserformBase);