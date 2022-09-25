/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import Dialog, { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss}>
      <Overlay>
        <InnerWrapper>
          <button onClick={onDismiss}>Dismiss menu</button>
          <nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </nav>
          <footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </footer>
        </InnerWrapper>
      </Overlay>
    </Dialog>
  );
};

const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  inset: 0;
  background-color: hsla(220, 5%, 40%, 0.8);
`;

const InnerWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 75%;
  right: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default MobileMenu;
