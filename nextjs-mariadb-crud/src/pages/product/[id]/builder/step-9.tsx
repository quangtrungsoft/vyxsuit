import { useRouter } from "next/router";
import styles from "@/styles/product-list.module.scss";
import clsx from "clsx";
import Link from "next/link";
import Select, { Option} from "@/components/Select";
import { countries } from "@/shared/country";

const Step9 = () => {
  const router = useRouter();
  const { id } = router.query;
  const countrySource = countries.map(country => ({
    label: country.name,
    value: country.code2,
  })) as Option[];

  const nextStep = () => {
    router.push(`/product/${id}/builder/step-8`);
  };

  const handleSelectCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  }

  return (
    <>
      <div className={clsx(styles["step-2"], "container-fluid mt-5")}>
        <div className="row">
          <div className="col-3">
            <div className="w-100 d-inline-flex align-items-center justify-content-end gap-3">
              <svg
                width={"2rem"}
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                enable-background="new 0 0 32 32"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <line
                    fill="none"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    x1="6"
                    y1="16"
                    x2="28"
                    y2="16"
                  ></line>{" "}
                  <polyline
                    fill="none"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    points="14,24.5 5.5,16 14,7.5 "
                  ></polyline>{" "}
                </g>
              </svg>
              <Link
                href={`/product/${id}/builder/step-10`}
                className="primary-color text-decoration-none"
                passHref
              >
                <p className="mb-0 primary-color">Back to prevous</p>
              </Link>
            </div>
          </div>
          <div className="col-6">
            <p className="text-center fs-4">Step 9/11</p>
            <div className="text-center fs-4">
              <h3>Payment & Shipping</h3>
              {/* <p className={styles["sub-text"]}>
                Choose the fit that complements your body and style preferences.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3">
          <div className="col-12">
            <h3>Customer information</h3>
          </div>
          <div className="col-12">
            <input placeholder="Email Address" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <input placeholder="First name *" />
          </div>
          <div className="col-6">
            <input placeholder="Last name *" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <input placeholder="Company name" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <Select options={countrySource} placeholder={"Country / Region *"} onChange={handleSelectCountry} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4 m-auto mt-5 ">
            <button
              className="p-3 w-100 bg-primary-color border-0 accent-color fs-5"
              onClick={nextStep}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step9;
