import { useState } from "react"

const Section = ({title, description, isVisible, setIsVisible}) => {
    return(

        <div className="border border-black p-2 m-2 shadow-2xl hover:translate-y-1">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible?(
                <button className="bg-blue-700 rounded p-2 m-2 text-white cursor-pointer" onClick={()=>{setIsVisible(false)}}>Hide  ↑</button>
            ):(
                <button className="bg-blue-700 rounded p-2 m-2 text-white cursor-pointer" onClick={()=>{setIsVisible(true)}}>Show  ↓ </button>
            )}
            
            {isVisible? <p>{description}</p> : null}
            
        </div>
        
    )
}

const InstaMangao = () =>{
    const [visibleSection, setVisibleSection] = useState("");
    return (

        <>
            <div>
                <h1 className="text-3xl p-3 m-2 font-bold" >InstaMangao</h1>
                <Section 
                    title={"About InstaMangao"} 
                    description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"} 
                    isVisible ={visibleSection === "about"}
                    setIsVisible={(value)=>{
                        setVisibleSection(value?"about":"")
                    }}
                />
                <Section 
                    title={"Team InstaMangao"} 
                    description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"} 
                    isVisible ={visibleSection === "team"}
                    setIsVisible={(value)=>{
                        setVisibleSection(value?"team":"")
                    }}
                />
                <Section 
                    title={"Careers"} 
                    description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"} 
                    isVisible ={visibleSection === "careers"}
                    setIsVisible={(value)=>{
                        setVisibleSection(value?"careers":"")
                    }}
                />
                <Section 
                    title={"Product"} 
                    description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"} 
                    isVisible ={visibleSection === "product"}
                    setIsVisible={(value)=>{
                        setVisibleSection(value?"product":"")
                    }}
                />
                <Section 
                    title={"Details"} 
                    description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"} 
                    isVisible ={visibleSection === "details"}
                    setIsVisible={(value)=>{
                        setVisibleSection(value?"details":"")
                    }}
                />
                {/* <AboutInstaMangao />
                <DetailsIM />
                <TeamsIM />
                <ProductIM />
                <CareersIM /> */}
            </div>
            
        </>
        
    )
}

export default InstaMangao;