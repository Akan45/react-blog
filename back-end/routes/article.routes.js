import { Router } from "express";
import { getarticles, addcomments,addArticle, getAllArticles, editArticle, getarticlebyid, deleteArticle, getarticlesbyuser, likeArticle, getArticleByTag, saveforlater, saveasdraft, getUserDrafts } from "../controllers/article.controller.js";
import multer from 'multer'
import { upload_on_cloudinary } from "../utils/cloudinary.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const articleRouter = Router()

// add article route
articleRouter.post('/addarticle', upload.single("thumbnail"), addArticle); 

// get article route
articleRouter.post('/getarticle', getarticles);

// get all article route
articleRouter.get('/getallarticle', getAllArticles);

//get article by specfic user
articleRouter.post("/getarticlesbyuser", getarticlesbyuser)

// add comment route
articleRouter.post('/addcomment', addcomments);

//edit article
articleRouter.post('/editarticle', upload.single("thumbnail") ,editArticle)

//get article by id
articleRouter.post('/getarticlebyid', getarticlebyid)

// delete article
articleRouter.delete('/deletearticle', deleteArticle);

// Like/Unlike article route
articleRouter.post('/like/:articleId', likeArticle);

articleRouter.post('/getarticlebytag',getArticleByTag);
    

//add to save for later
articleRouter.post('/saveforlater', saveforlater)

//save as draft
articleRouter.post('/create-draft', upload.single('thumbnail') ,saveasdraft)

//get user drafts
articleRouter.get('/drafts', getUserDrafts)
export { articleRouter };