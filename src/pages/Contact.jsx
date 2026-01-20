import { useState } from "react";

export default function Contact() {
  const [errors, SetErrors] = useState({});
  const [user, SetUser] = useState({});
  const [isValide, SetIsvalide] = useState(false);
  const onchange = (e) => {
    const { name, value, type, checked } = e.target;
    const newData = { ...user, [name]: type === "checkbox" ? checked : value };
    SetUser(newData);
    SetErrors(validate(newData));
  };
  const validate = (data) => {
    const errors = {};

    if (!data["first-name"] || data["first-name"].trim() === "") {
      errors["first-name"] = "First name is required";
    }

    if (!data["last-name"] || data["last-name"].trim() === "") {
      errors["last-name"] = "Last name is required";
    }

    if (!data["email"] || !/^\S+@\S+\.\S+$/.test(data["email"])) {
      errors["email"] = "Valid email is required";
    }

    if (!data["agree-to-policies"]) {
      errors["agree-to-policies"] = "You must agree to the policy";
    }
    if (
      isNaN(data["phone-number"]) ||
      data["phone-number"].length < 10 ||
      data["phone-number"].trim() == ""
    ) {
      errors["phone-number"] = "Valid phone number is required";
    }
    if (!data["message"] || data["message"].trim().length < 100) {
      errors["message"] = "your message must be at least 100 character";
    }

    return errors;
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(user);
    SetErrors(validationErrors);
    if (Object.keys(validationErrors).length == 0) {
      SetIsvalide(true);
      setTimeout(()=>{SetIsvalide(false)},4000)
      console.log(user);
      e.target.reset();
      SetUser({});
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-amber-950 sm:text-5xl">
          Contact{" "}
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        onSubmit={(e) => handlSubmit(e)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                onChange={(e) => onchange(e)}
                name="first-name"
                type="text"
                autoComplete="given-name"
                className={`block w-full rounded-md bg-white  px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1  outline-red-500" outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${errors["first-name"] ? "focus:outline-red-500" : "focus:outline-amber-400"}`}
              />
              {errors["first-name"] ? (
                <span className="text-red-600 text-center m-2">
                  {errors["first-name"]}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                onChange={(e) => onchange(e)}
                type="text"
                autoComplete="family-name"
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1  outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${errors["last-name"] ? "focus:outline-red-500" : "focus:outline-amber-400"} `}
              />
              {errors["last-name"] ? (
                <span className="text-red-600 text-center m-2">
                  {errors["last-name"]}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                onChange={(e) => onchange(e)}
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-400"
              />
              {errors["company"] ? (
                <span className="text-red-600 text-center m-2">
                  {errors["company"]}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => onchange(e)}
                autoComplete="email"
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1  outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${errors["email"] ? "focus:outline-red-500" : "focus:outline-amber-400"}`}
              />
              {errors["email"] ? (
                <span className="text-red-600 text-center m-2">
                  {errors["email"]}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                name="phone-number"
                type="text"
                onChange={(e) => onchange(e)}
                placeholder="123-456-7890"
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1  outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${errors["phone-number"] ? "focus:outline-red-500" : "focus:outline-amber-400"}`}
              />

              {errors["phone-number"] ? (
                <span className="text-red-600 text-center m-2">
                  {errors["phone-number"] + " "+ user['phone-number']?.length}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                onChange={(e) => onchange(e)}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${errors["message"] ? "focus:outline-red-500" : "focus:outline-amber-400"}`}
                defaultValue={""}
              />
              {errors["message"] ? (
                <span className="text-red-600 text-center m-2">
                  {errors["message"] + " " + user["message"]?.length || 0 + "/200"}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-amber-600 transition-colors duration-200 ease-in-out has-checked:bg-amber-600 has-focus-visible:outline-2">
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  onChange={(e) => onchange(e)}
                  aria-label="Agree to policies"
                  className="absolute inset-0 size-full appearance-none focus:outline-hidden"
                />
              </div>
            </div>
            <label
              htmlFor="agree-to-policies"
              className="text-sm/6 text-gray-600"
            >
              By selecting this, you agree to our{" "}
              <a
                href="#"
                className="font-semibold whitespace-nowrap text-amber-600"
              >
                privacy policy
              </a>
              .
            </label>
          </div>
          {errors["agree-to-policies"] ? (
            <span className="text-red-600 text-center -m-1">
              {errors["agree-to-policies"]}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="mt-10">
          <button
            type="submit" 
            className="block w-full rounded-md cursor-pointer bg-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
      {isValide && (
        <div
          className={`
      fixed top-30 right-5 z-40 w-1/4
      rounded-lg border border-green-300
      bg-green-50 p-4 text-green-800
      transform transition-all duration-500 ease-out
      ${isValide ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
    `}
        >
          <p className="font-semibold">Success</p>
          <p>Your message has been sent successfully.</p>
        </div>
      )}
    </div>
  );
}
