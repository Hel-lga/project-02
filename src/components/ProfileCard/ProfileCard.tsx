interface Props{
   avatar:string;
   name:string;
   description:string; 
}

export default function ProfileCard(props:Props){
    const {avatar, name, description} = props;
    return <div className="profile-card">
        <img  src={avatar}  alt="User avatar" width={"200px"}/>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
}

// const personalInfo = {
//     avatar:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmgffzMaeQw7V9cKlwY9AUluTgDqHs0cBAA&s",

//     description: "Teacher",
//     name: "Alisher",
//   };
