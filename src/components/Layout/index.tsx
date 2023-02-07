import Header from "./Header"
import PropTypes from "prop-types"
import MetaConfig, { MetaConfigProps } from "./MetaConfig"

type Props = {
  children: React.ReactNode
  metaConfig: MetaConfigProps
  fullWidth?: boolean
}

const Layout: React.FC<Props> = ({
  children,
  metaConfig,
  fullWidth = false,
}) => {
  return (
    <div>
      <MetaConfig {...metaConfig} />
      <div className={`wrapper`}>
        {metaConfig.type !== "Paper" && <Header fullWidth={fullWidth} />}
        <main
          className={`px-3 md:m-6 flex-grow w-full transition-all max-w-6x2 ${
            fullWidth && "px-4 md:px-24"
          } ${metaConfig.type === "Paper" && "py-00"} `}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
