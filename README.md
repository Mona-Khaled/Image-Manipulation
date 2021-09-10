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
## Training Steps
1- specify paths for domainA in aging_gan.yaml file  
2- specify paths for domainB in aging_gan.yaml file
3- initialize number of filters in first layer in aging_gan.yaml file 
4-initialize number of epochs in aging_gan.yaml file 
5- run main.py file
## Testing Steps
1- run gui.py file
2- press Pick a Photo button
3- Browse for image to be converted
4- Click open
5- Your converted image will be shown
## Dataset Description
#### Speech2Face
* Fbank: 149,354 voice recordings
* VGG_ALL_FRONTAL (Actual Faces): 139,572 face images
#### Age Progression
* UTKFace dataset is a large-scale face dataset with long age span (range from 0 to 116 years old).
The dataset consists of over 20,000 face images with annotations of age, gender, and ethnicity.
The images cover large variation in pose, facial expression, illumination, occlusion, resolution,
etc.
## Future Work
* Enhance model performance by increasing accuracy, which can be achieved by collecting more data.  
It allows the “data to tell for itself”, instead of relying on assumptions and weak correlations,                                                           
Presence of more data results in better and accurate models.                                                            
* The ability to generate face images over different ages, for example:  
after 10 years or its multiples, and show the difference in signs of aging among them with  
high accuracy and preserving the identity for each one of them.  
                                                                     ![gif](https://user-images.githubusercontent.com/53131422/132791338-763e0d61-1494-4292-bc31-8757e9a29199.gif)
                                                                      
## References
1. J.-Y. Z. T. Park∗, "Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks," 24 Aug 2020. 
2. H. Y. D. H. Y. W. A. K. Jain2, "Learning Face Age Progression: A Pyramid Architecture of GANs," 1 Jan 2018. 
3. W. S. R. Liu, "Learning Residual Images for Face Attribute Manipulation," 12 Apr 2017. 
4. T.-H. O. T. D. C. K. I. Mosseri, "Speech2Face: Learning the Face Behind a Voice," 23 May 2019. 
