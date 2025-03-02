import React from 'react';
import Highlighter from "react-highlight-words";

const AppsPage: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
    const paragraphs = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        'In the midst of a vast, sunlit desert, dunes rolled like golden waves under a boundless blue sky. The silence was profound, punctuated only by the soft crunch of footsteps on sand. Here, isolation was a powerful reminder of nature’s raw, unyielding beauty.',
        'A bustling café on a rainy afternoon became a haven for creative souls seeking refuge from the storm. The clatter of coffee cups and murmur of quiet conversations blended harmoniously with the rhythmic patter of raindrops outside. In this warm, inviting space, strangers found common ground over shared moments of inspiration.',
        'The vibrant colors of autumn transformed the urban landscape into a living canvas of reds, oranges, and golds. Trees shed their leaves in a graceful descent, each one a fleeting reminder of nature’s impermanence. As pedestrians hurried along, the season whispered its timeless narrative of change and renewal.',
        'In a small coastal town, the salty air carried tales of seafarers and ancient mariners. The lighthouse, steadfast and solitary, stood as a guardian of countless stories etched into the tides. Every crashing wave and every echoing call of a distant gull wove a tapestry of maritime legends.',
        'A quiet suburb on a summer evening hummed with the sounds of everyday life – children playing, neighbors chatting, and the soft hum of lawnmowers. The setting sun bathed the streets in a gentle, golden glow that seemed to slow time itself. In these moments, life was defined by small joys and the comfort of community.',
        'Deep in a forest untouched by modern hustle, a babbling brook carved its way through mossy rocks and ancient trees. The water’s gentle murmur was a soothing counterpoint to the rustling of leaves and chirping of unseen birds. Nature, in all its raw beauty, reminded visitors of the timeless rhythms that governed life.',
        'A vintage market burst with eclectic treasures, each item holding a story from a bygone era. Antique trinkets, weathered books, and faded photographs beckoned curious collectors. Amid the charming chaos, one could feel the pulse of history, alive in every carefully preserved detail.',
        'Under a gray winter sky, city streets transformed into a quiet landscape of shimmering ice and reflective puddles. The chill in the air brought people together, huddled beneath scarves and warm coats, sharing smiles and fleeting moments of connection. Despite the cold, there was a shared sense of resilience and hope.',
        'In an artist’s studio, canvases filled with abstract expressions leaned against one another like silent confidants. Bold brushstrokes and splashes of color narrated emotions too complex for words. The room was alive with creative energy, each piece a testament to the artist’s unbounded imagination.',
        'A small, family-run diner on the outskirts of town offered more than just a meal – it provided a glimpse into the heart of community. Stories were shared over steaming plates of comfort food, and every laugh echoed with genuine warmth. In that humble space, the ordinary became extraordinary through the simple act of gathering together.'
    ];

    return (
        <div>
            <h2>Apps Page</h2>
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

export default AppsPage;
