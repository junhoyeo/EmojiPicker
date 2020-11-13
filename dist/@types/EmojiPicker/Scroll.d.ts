import React from "react";
import { FixedSizeList as VirtualList } from 'react-window';
import { EmojiObject, itemRange } from '../utils';
declare type ScrollProps = {
    emojisPerRow: number;
    focusedEmoji: EmojiObject | null;
    emojiData: Record<string, EmojiObject[]>;
    refVirtualList: React.MutableRefObject<VirtualList>;
    handleClickInScroll: (emoji: EmojiObject) => void;
    handleMouseInScroll: (emoji: EmojiObject) => void;
    itemCount: number;
    itemRanges: itemRange[];
    collapseHeightOnSearch: boolean;
};
declare const MemoizedScroll: React.NamedExoticComponent<ScrollProps>;
export default MemoizedScroll;
//# sourceMappingURL=Scroll.d.ts.map