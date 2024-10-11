import config  from '@digitallinguistics/eslint-config'
import globals from 'globals'

const projectConfig = {
  languageOptions: {
    globals: { ...globals.nodeBuiltin },
  },
}

export default [...config, projectConfig]
