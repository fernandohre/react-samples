import React from "react"

export default function UserForm({ onSubmitButton }) {
    return (
    <form onSubmit={onSubmitButton}>
        <input name="firstName" />
        <input name="lastName" />
        <input name="phone" />
        <button>add</button>
    </form>)
}