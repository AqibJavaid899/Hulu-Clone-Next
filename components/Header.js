import Image from 'next/image' 
import {
    BadgeCheckIcon, CollectionIcon,
     HomeIcon, LightningBoltIcon,
    SearchIcon, UserIcon } 
from '@heroicons/react/outline'
import HeaderIcons from './HeaderIcon'

const  Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 items-center 
        justify-between h-auto'>
            
            {/* Passing Hero Icons and corrsponding Titles to the component as a Prop*/}
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderIcons title={'HOME'} Icon={HomeIcon} />
                <HeaderIcons title={'TRENDING'} Icon={LightningBoltIcon} />
                <HeaderIcons title={'VERIFIED'} Icon={BadgeCheckIcon} />
                <HeaderIcons title={'COLLECTIONS'} Icon={CollectionIcon} />
                <HeaderIcons title={'SEARCH'} Icon={SearchIcon} />
                <HeaderIcons title={'ACCOUNT'} Icon={UserIcon} />
            </div>
            
            {/* Hulu Image */}
            <Image 
            className='object-contain'
            src='https://links.papareact.com/ua6'
            height={100}
            width={200}
            />
        </header>
    )
}

export default Header
