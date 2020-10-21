import * as React from "react"
import { Logo1, LogoSVGImport } from "./assets/logos"
import CreateLogo from "./components/CreateLogo"
import DownloadButton from "./components/ui/DownloadButton"
import SelectColor, {
    ColorData,
    defaultValues as colorsDefaultValues,
} from "./components/ui/SelectColors"
import SelectLayout, { LogoAlignOptions } from "./components/ui/SelectLayout"
import SelectLogo from "./components/ui/SelectLogo"
import SelectTypography, {
    defaultValues as typographyDefaultValues,
    TypographyData,
} from "./components/ui/SelectTypography"

type MenuOptions = "logo" | "typography" | "layout" | "colors"

const Creator: React.FunctionComponent<unknown> = () => {
    const [menuOption, setMenuOption] = React.useState<MenuOptions>("logo")
    const [logo, setLogo] = React.useState<LogoSVGImport>(Logo1)
    const [typography, setTypography] = React.useState<TypographyData>(typographyDefaultValues)
    const [logoAlign, setLogoAlign] = React.useState<LogoAlignOptions>("align-top")
    const [colors, setColors] = React.useState<ColorData>(colorsDefaultValues)

    const renderRightSidePanel = () => {
        switch (menuOption) {
            case "logo":
                return <SelectLogo setLogo={setLogo} />
            case "layout":
                return <SelectLayout logoAlign={logoAlign} setLogoAlign={setLogoAlign} />
            case "typography":
                return <SelectTypography typography={typography} setTypography={setTypography} />
            case "colors":
                return <SelectColor colors={colors} setColors={setColors} />
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex w-auto  justify-center">
                <div className="flex flex-initial flex-col lg:flex-row w-full justify-evenly">
                    <div className="box-border flex justify-end m-1 lg:m-16 w-1/4">
                        <div className="grid h-40 gap-2 grid-cols-2 lg:grid-cols-1">
                            <button
                                onClick={() => setMenuOption("logo")}
                                className="box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
                            >
                                Logo
                            </button>
                            <button
                                onClick={() => setMenuOption("typography")}
                                className="box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
                            >
                                Typography
                            </button>
                            <button
                                onClick={() => setMenuOption("layout")}
                                className="box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
                            >
                                Layout
                            </button>
                            <button
                                onClick={() => setMenuOption("colors")}
                                className="box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
                            >
                                Colors
                            </button>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-center">
                        <CreateLogo
                            containerSize={{ width: 300, height: 280 }}
                            imageSize={{ width: 200, height: 200 }}
                            logoSVG={logo.svg}
                            logoAlign={logoAlign}
                            title={typography.title.text}
                            slogan={typography.slogan.text}
                            style={{
                                backgroundColor: colors.backgroundColor,
                                title: {
                                    color: colors.titleColor,
                                    fontFamily: typography.title.fontFamily,
                                    fontSize: typography.title.fontSize,
                                },
                                slogan: {
                                    color: colors.sloganColor,
                                    fontFamily: typography.slogan.fontFamily,
                                    fontSize: typography.slogan.fontSize,
                                },
                                logo: {
                                    fill: colors.logoColor,
                                },
                            }}
                        />
                    </div>
                    <div className="m-2 lg:m-16 w-1/4">{renderRightSidePanel()}</div>
                </div>
            </div>
            <DownloadButton />
        </div>
    )
}

export default Creator