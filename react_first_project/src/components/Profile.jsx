function Profile() {
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                name="Rahul"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Rahul , have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies : Reading , Hicking</p>
                <button>Contact</button>

            </ProfileCard>

            <ProfileCard
                name="Bob"
                age={25}
                greeting={
                    <div>
                        <strong>Hello Bob, Keep up the great Work !</strong>
                    </div>
                }
            >

                <p>Hobbies : Gamming , Cooking </p>
                <button>Contact</button>

            </ProfileCard>

        </div>
    )
}

export default Profile;

function ProfileCard(props){
    return(
        <>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>{props.greeting}</p>
        <div>{props.children}</div>
        </>
    )
}