import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { HighlightableTextArea } from '../.';
import './index.css';

const App = () => {
  return (
    <div>
      <HighlightableTextArea
        xOffset={0}
        yOffset={5}
        zIndex={5}
        popoverItem={(text, state) => {
          console.log('Text:- ', text);
          return (
            <div className="my-item" onClick={() => state(false)}>
              <p>{text}</p>
            </div>
          )
        }}
        onHighlightText={(e) => {
          console.log('MouseEvent:- ', e)
        }}
      >
        <div className="container">
          <p className='my-text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nobis deleniti eum veritatis quam illum nisi pariatur esse aliquam eligendi inventore eos dolorem quod placeat, consectetur odit vitae. Aliquid quibusdam, iste deleniti aliquam velit deserunt vel, animi laboriosam explicabo similique, libero tempora minima culpa voluptatum vitae ducimus dicta ex maxime consequuntur perferendis facilis nulla repudiandae quas earum. Ratione nobis qui ipsa iste perspiciatis eos quibusdam cum illum inventore eligendi nesciunt fugiat laboriosam minima, in optio quia excepturi nihil ab, labore sunt beatae! Expedita ut laudantium accusamus est voluptatibus, cum sunt amet sed. Expedita aperiam blanditiis, repellat enim laborum incidunt laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi soluta quas cum dolorum consectetur laudantium iste aspernatur laboriosam at tempore voluptatibus, maiores temporibus nulla inventore maxime, distinctio odit ab ratione vero ullam? Qui atque corrupti culpa neque nostrum, cumque eius rerum quam corporis ab magni eaque voluptate laboriosam reiciendis voluptates.
          </p>
        </div>
      </HighlightableTextArea>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
