export default function Home() {
  return(
    <div>
    <h1>Home Page</h1>
    <button onClick={() => window.location.href = '/login'}>Go to Login</button>
    <button onClick={() => window.location.href = '/userProfile'}>Go to User Profile</button>
    <button onClick={() => window.location.href = '/gameCollection'}>Go to Game Collection</button>
    <button onClick={() => window.location.href = '/posts'}>Go to Posts</button>
    </div>
  );
}
