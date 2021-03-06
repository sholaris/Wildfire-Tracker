import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon}/> Widlfire Tracker (Powered by NASA)</h1>
        </header>
    )
}

export default Header
