import * as React from "react"
import { Link } from "react-router-dom"
import logos, { LogoSVGImport } from "./assets/logos"
import CreateLogo from "./components/CreateLogo"
import UIStore from "./stores/LogoModel"

const Showcase: React.FunctionComponent<unknown> = () => {
    const title = UIStore.useState((s) => s.title.text)
    const slogan = UIStore.useState((s) => s.slogan.text)

    const setLogo = (logo: LogoSVGImport) => {
        UIStore.update((s) => {
            s.logo.src = logo
        })
    }

    const renderLogoList = () => {
        return logos.map((logo) => (
            <button key={logo.id} onClick={() => setLogo(logo)}>
                <CreateLogo
                    imageSize={{ width: 300, height: 300 }}
                    logoSVG={logo.svg}
                    title={title}
                    slogan={slogan}
                />
            </button>
        ))
    }

    return (
        <div className="flex flex-col items-center">
            <div>
                <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded"
                    to="/start"
                >
                    Back
                </Link>
            </div>
            <div className="m-16 lg:w-2/5">
                <div className="flex flex-col bg-orange-200 my-4">
                    <h1 className="text-4xl text-center">Choose from any of the logo templates</h1>
                    <p className="text-xl text-center">
                        You can change this information after your designs have been created
                    </p>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800">
                        <div className="grid gap-4 grid-cols-3">{renderLogoList()}</div>
                    </div>
                </div>
                <div>
                    <Link
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        to="/"
                    >
                        Next
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Showcase