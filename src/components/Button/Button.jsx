import './style.css';

function Button () {
    // const buttonName = 'Click me';
    const clickButton = "Click";
    const meButton = "me";
    const isGetButton = true;
    const buttonClass = 'button-component';

    //1 variant
    // return <button className={buttonClass}>{buttonName}</button>

    //2 variant
    // return (
    //     <div>
    //         <h2>Button</h2>
    //         <button className={buttonClass}>
    //             {isGetButton ? clickButton : meButton}
    //         </button>
    //     </div>
    // )

    //3 variant
    return (
        <button className={buttonClass}>
            {isGetButton ? clickButton : meButton}
        </button>
    )
    
}

export default Button;