import illustration from '../assets/img/NickDesigner.jpg';

export default function Home() {
    return (
        <main className="page-home">
            <h2>Hi there!</h2>

            <div className="content">
                <p>
                    Check out my <a href="https://www.behance.net/phunguyenquang" target="_blank">REAL PORTFOLIO</a> here. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                </p>
            </div>
            <div className="illustration">
                <img src={illustration} />
            </div>
        </main>
    );
}