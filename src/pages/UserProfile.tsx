
export default function UserProfile() {

    return (
        <div>
        <h2>De la inceput</h2>
            Nickname/Displayname:
                <br />
                Login type: Google, Facebook, Username/Password
                <br />
                Email:
                    <br />
                    Account type: Standard (gratis)/Premium (platitor)
                    <br />
                    Logica de schimbat parola
                    <br/>
                    <div className="profile-picture">
                        Profile Picture:
                    </div>
                    <div>
                        Steam login zone
                    </div>
                    <div>
                        Register date (Joined date)
                    </div>

                <h2>Mai tarziu</h2>
                    <div>
                        Last seen date
                    </div>
                    <div>
                        BGG login zone
                    </div>
                    <div>
                        BGA login zone
                    </div>
                    <br />
                    <div>
                        Achievements
                        <div/>
                        <div>
                            Histoy Log
                            <br />
                            <img src="src/assets/LogHistoryExample.png" alt="Log History" width="100px" />
                        </div>
                    </div>
                </div>
            );
        }
