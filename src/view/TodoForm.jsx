import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Label } from "../components/Label";
import { PopUp } from "../components/PopUp";
import { TextArea } from "../components/TextArea";
import { Wrapper } from "../components/Wrapper";
import { Overlay } from "../components/Overlay";

export const TodoForm = ({ handleClick, handleSave }) => {
  return (
    <Overlay id="overlay" onClick={handleClick}>
      <PopUp>
        <Form>
          <Wrapper flexDirection="column">
            <Label fontSize="30px">Title</Label>
            <TextArea
              id="title-content"
              width="500px"
              height="150px"
              fontSize="30px"
            />
          </Wrapper>
          <Wrapper flexDirection="column">
            <Label fontSize="30px">Description</Label>
            <TextArea id="description-content" width="500px" height="150px" />
          </Wrapper>
          <Wrapper>
            <Button onClick={handleSave} type="submit">
              Save
            </Button>
            <Button id="cancel" background="red" type="reset">
              Cancel
            </Button>
          </Wrapper>
        </Form>
      </PopUp>
    </Overlay>
  );
};
