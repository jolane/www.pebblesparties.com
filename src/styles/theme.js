import {
	SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION
} from "constants";

export const colors = {
	light: `#DBEFEE`,
	primary: `#41C0BE`,
	secondary: `#008494`,
	black: `#58595B`,
	white: `#ffffff`,
}

export const sizes = {
	maxContentWidth: `118em`
}

const theme = {
	Arrow: {
		background: colors.primary,
		hover: colors.secondary,
	},
	SocialMediaIcon: {
		background: colors.primary,
		hover: colors.light,
	}
}
export default theme