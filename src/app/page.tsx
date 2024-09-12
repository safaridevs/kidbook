import Feed from "@components/Feed";

export default function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className="display-1 $orange-400">Discover & Share </h1>
              <br className="m" />
              <span className="display-3 ">Kid Powered Book Sharing</span>
              <p className="text-center">
                kidbook is an platform for kids to share their favorite books
                amongst their friends.
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col">
              <Feed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
