// Copyright (c) Chidera Ike. All rights reserved. Licensed under the MIT license.

/**
 * A component that renders a popover for a selected/highlighted text.
 *
 * @remarks
 * The `react-highlight-popover` defines the {@link HighlightableTextAreaProps} interface and {@link HighlightableTextArea} function.
 *
 * @packageDocumentation
 */

import * as React from 'react';
import './styles.scss';

type popoverItemCallback = (
  /**
   * The text that is selected/highlighted.
   */
  HighlightedText: string,

  /**
   * Use this to change the state of the popover.
   */
  setPopoverState: React.Dispatch<React.SetStateAction<boolean>>
) => React.ReactNode;
type onHighlightTextCallback = (event: MouseEvent) => void;

/**
 * Defines the props for {@link HighlightableTextArea}
 */
export interface HighlightableTextAreaProps {
  /**
   * The item to be rendered as popover when user has selected/highlighted text.
   * @example
   * Here is how it can be implemented:
   *
   * ```js
   * <HighlightableTextArea
   *    popoverItem={(HighlightedText, setPopoverState) => {
   *      return (
   *        <div onClick={() => setPopoverState(false)}>
   *          <p>{HighlightedText}</p>
   *        </div>
   *    )}}
   * >
   * </HighlightableTextArea>
   * ```
   * @param HighlightedText - The text that is selected/highlighted.
   * @param setPopoverState - Set to `false` to hide the popover.
   * @returns A react node.
   */
  popoverItem?: popoverItemCallback;

  /**
   * This event is fired after the popover renders.
   * It is a callback function that takes `event` as an argument.
   * @eventProperty
   */
  onHighlightText?: onHighlightTextCallback;

  /**
   * Positions the popover along the x-axis of the selected text.
   * @defaultValue 0
   */
  xOffset?: number;

  /**
   * Positions the popover along the y-axis of the selected text.
   * @defaultValue 10
   */
  yOffset?: number;

  /**
   * The `zIndex` property sets the z-order of the popover and its descendants or flex items.
   * Overlapping elements with a larger z-index cover those with a smaller one.
   * @defaultValue 10
   */
  zIndex?: number;
  children: React.ReactNode;
}

/**
 * Defines the area in which selected/highlighted text will render a popover.
 * @public
 */
export const HighlightableTextArea = ({
  popoverItem,
  onHighlightText,
  xOffset = 0,
  yOffset = 10,
  zIndex = 10,
  children
}: HighlightableTextAreaProps) => {
  const [x, setX] = React.useState<number>(0);
  const [y, setY] = React.useState<number>(0);
  const [text, setText] = React.useState<string>('');
  const [showPopover, setShowPopover] = React.useState<boolean>(false);

  const highlightRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    window.addEventListener('mouseup', highlightAreaEvent);
    return () => {
      window.removeEventListener('mouseup', highlightAreaEvent);
    }
  });

  const hidePopover = () => {
    setShowPopover(false);
  };

  const highlightAreaEvent = (event: MouseEvent) => {
    const selection = window.getSelection();
    const selectedText = selection?.toString().trim();

    if (!selectedText) {
      hidePopover();
      return;
    }

    const selectionRange = selection?.getRangeAt(0);

    const startNode = selectionRange?.startContainer.parentNode || null;
    const endNode = selectionRange?.endContainer.parentNode || null;

    const highlightable = highlightRef.current;
    const highlightableRegion = highlightable?.querySelector(`#rhp`);

    if (highlightableRegion) {
      if (
        !highlightableRegion.contains(startNode) ||
        !highlightableRegion.contains(endNode)
      ) {
        hidePopover();
        return;
      }
    } else if (
      !highlightable?.contains(startNode) ||
      !highlightable?.contains(endNode)
    ) {
      hidePopover();
      return;
    }

    if (!startNode?.isSameNode(endNode)) {
      hidePopover();
      return;
    }

    const { x, y, width } = selectionRange!.getBoundingClientRect();

    if (!width) {
      hidePopover();
      return;
    }

    setX(x + width / 2);
    setY(y + window.scrollY - yOffset);
    setText(selectedText);
    setShowPopover(true);

    onHighlightText && onHighlightText(event);
  }

  return (
    <div ref={highlightRef} id='rhp'>
      {showPopover && (
        <div
          className='popover-container'
          style={{
            left: `${x + xOffset}px`,
            top: `${y}px`,
            zIndex: zIndex
          }}
          role="presentation"
          onMouseDown={e => e.preventDefault()}
        >
          {popoverItem ? (
            popoverItem(text, setShowPopover)
          ) : (
            <div className="popover-item">
              <span role="button">
                React Highlight Popover
              </span>
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  )
};
