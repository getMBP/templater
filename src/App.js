import Header from './js/components/header';
import Footer from './js/components/footer';

async function App() {
  const template = document.createElement('template');
  template.innerHTML = `
    <div class="container">
      ${Header()}
      <main>Main</main>
      <aside>Aside</aside>
      ${Footer()}
    </div>
  `
  return template.content.cloneNode(true);
}

export default App;