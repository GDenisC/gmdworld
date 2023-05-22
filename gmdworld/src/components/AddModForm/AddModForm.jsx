import {React, useContext, useEffect, useRef, useState} from "react";
import axios from 'axios';
import classes from "./AddModForm.module.css"
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import OkAlert from "../OkAlert/OkAlert";
import Popup from "../../UI/Popup/Popup";
import LoadingCircle from "../../UI/LoadingCircle/LoadingCircle";
import { useFetching } from "../../hooks/useFetching";
import Requests from "../../API/requests";
import { AuthContext } from "../../context";

function AddModForm({isVisible, setVisible}) {

  const {username, setUsername} = useContext(AuthContext);
  const {password, setPassword} = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [img, setImg] = useState(null);
  const [download, setDownload] = useState(null);
  const [source, setSource] = useState(null);
  const [platform, setPlatform] = useState('windows');

  const [isError, setError] = useState(0);
  const [errorText, setErrorText] = useState('');

  const [isOk, setOk] = useState(0);

  const imgInput = useRef();
  const downloadInput = useRef();
  const sourceInput = useRef();

  const formData = new FormData();

  const [sendMod, isLoading, error] = useFetching(async () => {
    console.log(formData)
    const response = await Requests.sendMod(formData);
    const responseData = response.data;
      if(responseData != "200"){
        setErrorText(response.data);
        setError(1);
      }else{
        setVisible(0);
        setOk(1);
      }
  });


  useEffect(() => {
    setTitle('');
    setInfo('');
    setImg(null);
    setDownload(null);
    setSource(null);
    imgInput.current.value = null;
    downloadInput.current.value = null;
    sourceInput.current.value = null;
    setPlatform('windows');
  }, [isVisible])

  const handleImgChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleDownloadChange = (e) => {
    setDownload(e.target.files[0]);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.files[0]);
  };

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading)
      return;
  
    formData.append('title', title);
    formData.append('info', info);
  
    if (img) {
      formData.append('img', img);
    }
  
    if (download) {
      formData.append('download', download);
    }
  
    if (source) {
      formData.append('source', source);
    }
  
    formData.append('platform', platform);

    formData.append('username', username);

    formData.append('password', password);

    sendMod();
  };

  return (
    <div>
      <Popup isVisible={isVisible} setVisible={setVisible}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <p className={classes.formName}>Добавить мод</p>
          <div className={classes.titleFrame}>
            <label className={classes.label} name="title">Название мода:</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              className={classes.title}
              required
              value={title}
            />
          </div>
          <div className={classes.areaFrame}>
            <label className={classes.label} name="title">Информация о моде:</label>
            <textarea
              onChange={(e) => setInfo(e.target.value)}
              name="info"
              value={info}
              className={classes.info}
              required
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className={classes.files}>
            <div className={classes.img}><input
              ref={imgInput}
              onChange={handleImgChange}
              name="img"
              className={classes.file}
              accept=".jpg, .jpeg, .png"
              required 
              type="file"
            /></div>
            <div className={classes.download}><input
              ref={downloadInput}
              onChange={handleDownloadChange}
              name="download"
              className={classes.file}
              required 
              type="file"
            /></div>
            <div className={classes.source}><input
              ref={sourceInput}
              onChange={handleSourceChange}
              name="source"
              className={classes.file}
              type="file"
            /></div>
          </div>
          <div className={classes.radios}>
          <input
            onChange={handlePlatformChange}
            checked={platform === 'windows'}
            className={classes.isWindows}
            value="windows"
            type="radio"
            name="platform"
          />
          <input
            onChange={handlePlatformChange}
            checked={platform === 'android'}
            className={classes.isAndroid}
            value="android"
            type="radio"
            name="platform"
          />
          </div>
          <button className={classes.send} type="submit">Отправить</button>
        </form>
      </Popup>
      <LoadingCircle isLoading={isLoading} top={'50%'} left={'50%'} width={'30%'}/>
      <ErrorAlert isError={isError} setError={setError} errorText={errorText}/>
      <OkAlert isOk={isOk} setOk={setOk} okText="Мод успешно добавлен!"/>
    </div>
  );
}

export default AddModForm;