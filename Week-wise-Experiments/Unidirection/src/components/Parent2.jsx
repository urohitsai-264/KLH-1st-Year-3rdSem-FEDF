import Child2 from "./Child2";
const Parent2 = () => {
  const handleMessage = (msg) => {
    alert("Message from Child: " + msg);
  };
  return (
    <>
      <h1>Parent2 Component</h1>
      <Child2 key1={"hello"} key2={500}
        sendData={handleMessage}
      />
    </>
  );
};
export default Parent2;