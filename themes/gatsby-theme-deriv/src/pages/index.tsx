import React, { useEffect } from 'react'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import { WithIntl } from 'components/localization'

const Home = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.location.replace('https://deriv.com')
        }
    }, [])

    return null
}

export default WithIntl()(Home)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Trade forex, stocks, crypto, gold & commodities | Deriv_t_"
        description="_t_Award-winning online broker, rated excellent on Trustpilot. Sign up for a demo trading account to trade forex, stocks, and other financial markets._t_"
        has_organization_schema
        pageContext={pageContext}
    />
)
