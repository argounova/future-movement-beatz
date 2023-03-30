import styled from "styled-components"

export const VideoStyles = styled.section`
  background-color: #000;
  position: relative;

  .perks__image--bg,
  .perks__image--overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .perks__image--bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .perks__image--overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .perks__divider {
    font-size: 25px;
    color: var(--primary);

    
  }

  > .container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    

    @media (min-width: 1200px) {
      gap: calc(var(--gap) * 4);
    }
  }
`