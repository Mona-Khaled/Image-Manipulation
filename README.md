# Speech2Face
Image synthesis has been a trending task for the AI community in recent years. Many works have shown the potential 
of Generative Adversarial Networks (GANs) to deal with tasks such as text or audio to image synthesis.
This project aims to reconstruct facial Image of a person from a short audio recording of that person speaking and perform face age progression using deep neural networks and web application.
Conditional GAN is applied in the speech to face conversion, while Cycle GAN is applied in the second process which is age progression.  
## Conditional GAN Architecture 
![conditional gan arch](https://user-images.githubusercontent.com/53131422/132505165-bf22e4af-8541-4733-b908-669cd319ffb6.jpg)

## CycleGAN Architecture 
![image](https://user-images.githubusercontent.com/53131422/132503256-eb8c1967-ec8a-49b3-8ab3-4aa0e5c20c1a.png)

## Requirements
* pytorch
* h5py
* Tensorflow
* numpy
* matplotlib

## Datasets Description
### Speech2Face
* Fbank: 149,354 voice recordings.
* VGG_ALL_FRONTAL (Actual Faces): 139,572 face images.
### Age Progression
![image](https://user-images.githubusercontent.com/53131422/132506632-27487851-324c-4824-bad9-5c224070a740.png)
* UTKFace dataset is a large-scale face dataset with long age span (range from 0 to 116 years old). The dataset consists of 
over 20,000 face images with annotations of age, gender, and ethnicity. The images cover large variation in pose, facial expression,
illumination, occlusion, resolution, etc.

## References

1. J.-Y. Z. T. Park∗, "Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks," 24 Aug 2020. 
2. H. Y. D. H. Y. W. A. K. Jain2, "Learning Face Age Progression: A Pyramid Architecture of GANs," 1 Jan 2018. 
3. W. S. R. Liu, "Learning Residual Images for Face Attribute Manipulation," 12 Apr 2017. 
4. T.-H. O. T. D. C. K. I. Mosseri, "Speech2Face: Learning the Face Behind a Voice," 23 May 2019. 






