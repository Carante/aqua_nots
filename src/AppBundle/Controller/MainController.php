<?php

namespace AppBundle\Controller;

use AppBundle\AppBundle;
use AppBundle\Entity\Genus;
use AppBundle\Entity\GenusNote;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MainController extends Controller
{
    public function homepageAction()
    {
        return $this->render('main/homepage.html.twig');
    }

    /**
     * @Route("/search", name="search")
     */
    public function searchAction()
    {
        $search = $_GET["q"];

        $em = $this->getDoctrine()->getManager();

        $genus = $em->getRepository(AppBundle::Genus)
            ->findOneBy(['name' => $search]);


        if ($article == false) {
            return $this->render('home/search.html.twig', array(
                'articles' => $posts,
                'searchArticles' => $search
            ));
        } else {

        }

        return $this->redirect("genus/".$genus->getName());

    }
}