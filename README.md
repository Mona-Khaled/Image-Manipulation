# Image Manipulation
Image synthesis has been a trending task for the AI community in recent years.
Many works have shown the potential of Generative Adversarial Networks (GANs) 
to deal with tasks such as text or audio to image synthesis.
Conditional GAN is the selected GAN model for the voice to facial image conversion process, while CycleGAN is applied in age progression. 

## Conditional GAN Architecture
![conditional gan arch](https://user-images.githubusercontent.com/53131422/132605384-870fd71a-13c3-4cc6-91cb-308ad54884c5.jpg)

## CycleGAN Architecture
![image](https://user-images.githubusercontent.com/53131422/132605405-6b64e02d-a764-4e75-82fa-011650bc869c.png)

## Requirements
* pytorch
* h5py
* Tensorflow
* numpy
* matplotlib

## Datasets Description
#### Speech2Face
* Fbank: 149,354 voice recordings
* VGG_ALL_FRONTAL (Actual Faces): 139,572 face images
#### Age Progression
* UTKFace dataset is a large-scale face dataset with long age span (range from 0 to 116 years old).
The dataset consists of over 20,000 face images with annotations of age, gender, and ethnicity.
The images cover large variation in pose, facial expression, illumination, occlusion, resolution,
etc.

## References
1. J.-Y. Z. T. Park∗, "Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks," 24 Aug 2020. 
2. H. Y. D. H. Y. W. A. K. Jain2, "Learning Face Age Progression: A Pyramid Architecture of GANs," 1 Jan 2018. 
3. W. S. R. Liu, "Learning Residual Images for Face Attribute Manipulation," 12 Apr 2017. 
4. T.-H. O. T. D. C. K. I. Mosseri, "Speech2Face: Learning the Face Behind a Voice," 23 May 2019. 
