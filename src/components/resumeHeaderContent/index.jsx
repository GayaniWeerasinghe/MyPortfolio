import './styles.scss'

const ResumeHeaderContent = (props) => {

    const {headerText,icon} = props

    return(
        <div className="wrapper">
           <h2>{headerText}</h2>
                <div>
                <a href="/myCV.pdf" download>
                    <button className="download-button">Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default ResumeHeaderContent