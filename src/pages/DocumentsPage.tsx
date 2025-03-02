import React from 'react';
import Highlighter from "react-highlight-words";

const DocumentsPage: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
    const paragraphs = [
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse...',
        'The morning light filtered through the sheer curtains, casting playful shadows on the worn wooden floor. A solitary cat prowled lazily by the window, its green eyes scanning the room with quiet curiosity. In the distance, the hum of a waking city began to stir, promising a day full of unseen adventures.',
        'A crisp breeze stirred the fallen leaves on the pavement, each one a tiny masterpiece of nature’s seasonal artistry. The park was dotted with visitors, some lost in thought and others engaged in lively conversation. The mingling scents of fresh rain and earth created a calming, almost hypnotic effect on passersby.',
        'In a quiet village nestled among rolling hills, time seemed to move at a gentler pace. Neighbors greeted each other with warm smiles and heartfelt hellos. The town square, with its ancient fountain and cobblestone paths, was a living testament to decades of shared memories.',
        'The old library stood as a fortress of knowledge, its walls lined with books that spanned centuries of human thought. Dust particles danced in the shafts of sunlight that broke through stained-glass windows. Every whispered page and every subtle rustle spoke of countless stories yearning to be rediscovered.',
        'A gentle melody played from a street performer\'s guitar, weaving through the bustling urban noise like a soft lullaby. Listeners paused in their hurried steps, enchanted by the soulful strains that seemed to capture the heartbeat of the city. For a moment, all worries melted away, replaced by the simplicity of the music.',
        'Beneath a starry sky, the campfire crackled and spat sparks into the cool night air. Tales of distant lands and mythical creatures were shared among friends, each story growing richer with each retelling. The night was alive with possibility, as if every shimmering star held a secret waiting to be told.',
        'On a quiet farm at the break of dawn, the first light revealed the dew-kissed fields in all their glory. The rhythmic clucking of chickens and the low murmur of distant cows composed an organic symphony of rural life. Amid this pastoral serenity, a farmer sipped his coffee, contemplating the beauty of simple routines.',
        'A hidden alleyway in a bustling metropolis revealed murals of bold colors and abstract forms that defied conventional beauty. The street art transformed an ordinary passage into a vibrant gallery, telling stories of revolution, hope, and dreams. Each stroke of paint invited observers to see the world through a kaleidoscope of emotions.',
        'The scent of freshly baked bread wafted through the open windows of a small bakery, enticing early morning customers. Each loaf carried the warmth of the oven and the promise of a comforting meal. Locals gathered with quiet gratitude, cherishing the shared ritual of a warm breakfast in the company of friends.',
        'High in the mountains, where the air was thin and pure, a solitary hiker marveled at the panoramic vista before him. The rugged peaks, dusted with snow, stretched toward a horizon that seemed to echo with ancient secrets. In that moment of solitude, nature’s majesty filled him with a profound sense of wonder and humility.',
        
       ];

    return (
        <div>
            <h2>Documents Page</h2>
            {paragraphs.map((para, idx) => (
                <p key={idx}>
                    <Highlighter
                        searchWords={[searchQuery]}
                        autoEscape={true}
                        textToHighlight={para}
                    />
                </p>
            ))}
        </div>
    );
};

export default DocumentsPage;
