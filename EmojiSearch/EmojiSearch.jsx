import React, { useState } from 'react';
import emojiJson from './Emoji.json';
import './Emoji.css';
import _ from 'lodash';
import { useEffect } from 'react';

const EmojiSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEmoji, setFilteredEmoji] = useState(emojiJson);
    const [copyImageIndex, setCopyImageIndex] = useState(null);
    const [selectedSymbol, setSelectedSymbol] = useState(null);

    const handleSearch = _.debounce((term) => {
        const filtered = emojiJson.filter(
            (elem) =>
                elem.title.toLowerCase().includes(term.toLowerCase()) ||
                elem.keywords.toLowerCase().includes(term.toLowerCase()) ||
                elem.symbol.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredEmoji(filtered);
    }, 300);

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm]);

    const handleCopyImageClick = (index) => {
        setCopyImageIndex(index);
        setSelectedSymbol(filteredEmoji[index].symbol);

        setTimeout(() => {
            setCopyImageIndex(null);
        }, 2000);
    };

    useEffect(() => {
        navigator.clipboard.writeText(selectedSymbol);
    }, [selectedSymbol]);

    return (
        <>
            <span className='projectTitle'>Emoji Search by Palak Gupta 😃</span>
            <input
                type="text"
                placeholder="Search Any Emoji..."
                name=""
                id="search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="box-Container">
                {filteredEmoji &&
                    filteredEmoji.map((elem, index) => (
                        <div className="box" key={index}>
                            <div className="iconWithTitle">
                                <span>
                                    <img
                                        alt={elem.title}
                                        src={`//cdn.jsdelivr.net/emojione/assets/png/${elem.symbol.codePointAt(0).toString(16)}.png`}
                                    />
                                </span>
                                <span className="emojiTitle">{elem.title}</span>
                            </div>
                            {copyImageIndex === index ? (
                                <img
                                    width={'25px'}
                                    className="copyImage"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8umIiCU_K6ac-xS-ni4y6SP7XAd8C7Ms3Q&usqp=CAU"
                                    alt="Copy"
                                />
                            ) : (
                                <img
                                    onClick={() => {
                                        handleCopyImageClick(index);
                                    }}
                                    width={'25px'}
                                    className="copyImage"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtnha12GMs09LvX6uASKUuAI2P2mBaXO8lBA&usqp=CAU"
                                    alt="Copy"
                                />
                            )}
                        </div>
                    ))}
            </div>
        </>
    );
};

export default EmojiSearch;
