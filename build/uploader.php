<?php

var_dump($_FILES);

//originL -- move_uploaded_file($_FILES['blobFile']['tmp_name'], 'streamed_video.mp4');

move_uploaded_file($_FILES['blobs']['tmp_name'], 'streamed_video.mp4');