const HeaderIcons = ({ title, Icon }) => {
    return (
        // Passing Single Icon and Title as a prop and showing them one by one here in this component
        <div className='group flex flex-col items-center cursor-pointer
                        w-12 sm:w-20 hover:text-white'>
            <Icon className='h-10 mb-1 group-hover:animate-bounce' />
            {/* Tracking Widest is used to increasing the spaces between the 'title' letters */}
            <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
        </div>
    )
}

export default HeaderIcons
